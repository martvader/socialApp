import {fb,db,auth,storage,} from './config';


class Fire{
    constructor(){
        
    }

    addPost = async ({text, localUri}) =>{
        const remoteUri = await this.uploadPhotoAsync(localUri)

        return new Promise((res,rej) => {
            this.firestore
            .collection("posts")
            .add({
                text,
                uid:this.uid,
                timeStamp: this.timeStamp,
                image: remoteUri
            })
            .then(ref => {
                res(ref);
            })
            .catch(error => {
                rej(error);
            })
        })
    }
    uploadPhotoAsync = async uri => {
        const path = `photos/${this.uid}/${Date.now()}.jpg`;

        return new Promise(async(res,rej)=>{
            const response = await fetch(uri);
            const file = await response.blob(); 

            let upload = fb
                .storage()
                .ref(path)
                .put(file)
            upload.on(
                "state_changed", 
                snapshot => {}, 
                err => {
                rej(err)
            },
            async () => {
                const url = await upload.snapshot.ref.getDownloadURL()
                res(url);
            }
            )
        })
    }
    
    getFeed = (callback) =>{
        let ref = fb
        .firestore()
        .collection('posts');
        
        this.unsubscribe = ref.onSnapshot((querySnapshot) => {
            const feed = [];
            querySnapshot.forEach((doc) => {
                feed.push({
                    feedlist: doc.data().feedlist
                });
            })
        })
    }



    get firestore(){
        return fb.firestore()
    }
    get uid(){
        return (fb.auth().currentUser || {}).uid
    }
    get timeStamp(){
        return fb.firestore.FieldValue.serverTimestamp()
    }
}

Fire.shared = new Fire();
export default Fire; 