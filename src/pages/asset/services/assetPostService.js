import axios from "axios";
class Post{
    create(formData){
        const url = "http://127.0.0.1:8000/asset/create";
        const config = {
            headers:{
                'content-type': 'multipart/form-data',
            }
        };
        return axios.post(url, formData, config);
    }

    getPosts(){
        const url = "http://127.0.0.1:8000/asset/create";
        return axios.get(url);
    }

    update(formData){
        const url = "http://127.0.0.1:8000/asset/update-asset";
        const config = {
            headers:{
                'content-type': 'multipart/form-data',
            }
        };
        return axios.post(url, formData, config);
    }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default new Post ();