exports.addUri = (model, docs) => {
    for (let doc of docs){
        const id = doc._id.toString()
        doc.uri = `${model}/${id}`
        console.log(doc.uri);
    }

    return docs
}