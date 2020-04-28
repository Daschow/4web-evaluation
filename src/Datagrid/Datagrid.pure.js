

const AtoZ = (posts) => {
    var list = [];
    var key = [];
    posts.map((post) => {
        key.push(post.id);
        list.push(post.id);
        
        
    })
    console.log("list :"+list);
    console.log("posts Avant : "+posts)
    console.log("key : "+key)

    console.log("posts aprés :" +posts)




    

};
module.exports = {
    AtoZ: AtoZ,
  };