$(document).ready(function () {
    let title = $("#post_title")
    let date = $(".post-date")
    let decriptsion = $("#post_decriptsion")
    let postContent = $("#post_content")
    let postImg = $("#post_img")


    const queryString = window.location.search;   
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id');
    
    
    $.ajax({
        type: "GET",
        url: "http://apiforlearning.zendvn.com/api/articles/" + id,
        data: "data",
        dataType: "json",
        success: function (data) {
            title.html(data.title);
            date.html(data.publish_date);
            decriptsion.html(data.description);
            postContent.html(data.content);
            postImg.css("background-image",`url(${data.thumb})`)

        }
    });
    // $.ajax({
    //     type: "GET",
    //     url: "http://apiforlearning.zendvn.com/public/api/categories_news/"+ id +"/articles",
    //     data: "data",
    //     dataType: "json",
    //     success: function (data) {
    //         title.html(data.title);
    //         date.html(data.publish_date);
    //         decriptsion.html(data.description);
    //         postContent.html(data.content);
    //         postImg.css("background-image",`url(${data.thumb})`)        

    //     }
    // });
    
});