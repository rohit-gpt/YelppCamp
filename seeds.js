var mongoose   = require("mongoose"),
    Campground = require("./models/campground"),
    Comment = require("./models/comment");
    
var data = [
    {
        name: "Some Mountains 1",
        image: "https://farm4.staticflickr.com/3953/15613249585_d1e45f2ee5.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }, 
    {
        name: "Some More Mountains 2",
        image: "https://farm3.staticflickr.com/2950/15232292419_e3b1846217.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "trust me this is last Mountain",
        image: "https://farm8.staticflickr.com/7224/7384323418_6793f7fb25.jpg",
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
];
    
function seedDB() {
    Campground.remove({}, function(err) {
        // if(err){
        //     console.log(err);
        // } else {
        //     console.log("Campgrounds Removed");
        //     data.forEach(function(seed) {
        //         Campground.create(seed, function(err, campground) {
        //             if(err) {
        //                 console.log(err);
        //             } else {
        //                 console.log("Added a campground");
        //                 Comment.create(
        //                     {
        //                         text: "This place is great, but I wish there was internet!",
        //                         author: "Homer"
        //                     },function(err, comment) {
        //                         if(err) {
        //                             console.log(err);
        //                         } else {
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                             console.log("Created New Comment");
        //                         }
        //                     }
        //                 )
        //             }
        //         });
        //     });
        // }
    });
}

module.exports = seedDB;