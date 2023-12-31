const network = {

    url : 'https://northwind.vercel.app/api/products/',

    getAll : async function(){
        let res= await axios.get(this.url);
        return res.data;
    },
    getById : async function(id){
        let res = await axios.get(this.url+id)
        return res.data;
    },
    add : async function(body){
        let res = await axios.post(this.url, body)
        return res.data;
    },
    update : async function(id, body){
        let res = await axios.patch(this.url+id, body)
        return res.data;
    },
    delete : async function(id) {
        let res = await axios.delete(this.url+id)
        return res.data;
    },
    getNamesWithArray  : async function(){
        let res= await axios.get(this.url);
        let resArr = [];

        res.data.forEach(element => {
            resArr.push(element.name)
        });

        return resArr; 
    },
    getWithModel : async function(){
        let res= await axios.get(this.url);
        let resArr = [];
        res.data.forEach(element=>{
            let model = {
                id: element.id,
                name: element.name,
                price: element.unitPrice,
                stock : element.unitsInStock
            }
            resArr.push(model)
        })
        return resArr;
    }
}

