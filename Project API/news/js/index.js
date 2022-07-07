$(document).ready(function () {
  let mainMenu = $(".main_menu");
  let articleLarge = $("#article_large");
  let articleSmall = $("#article_small");
 

  $.ajax({
    type: "GET",
    url: "http://apiforlearning.zendvn.com/api/categories_news",
    data: {
      offset: 0,
      limit: 20,
    },
    dataType: "json",
    success: function (data) {
      let content = "";
      let contentMenuOther = "";
      for (let i = 0; i < data.length; i++) {
        let name = data[i].name;
        let link = data[i].link;
        let linkCategory = "category.html?id=" + data[i].id;
        if (i < 5) {
          content += `
            <li class="nav-item">
                <a class="nav-link" href="${linkCategory}">${name}</a>
            </li>
                `;
        } else {
          contentMenuOther += `
            <li class="nav-item"><a class="dropdown-item" href="${linkCategory}">${name}</a></li>
            `;
        }
      }
      let result =
        content +
        `
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Danh mục
                khác</a>
            <ul class="dropdown-menu">
                ${contentMenuOther}
            </ul>
        </li>`;
      mainMenu.html(result);
    },
  });
  // Article large
  $.ajax({
    type: "GET",
    url: "http://apiforlearning.zendvn.com/api/articles",
    data: {
      offset: 0,
      limit: 3,
    },
    dataType: "json",
    success: function (data) {
      let content = "";

      for (let i = 0; i < data.length; i++) {
        let linkDetail = "detail.html?id=" + data[i].id;
        content += `
           <article class="post">
                                <div class="card shadow-lg"> 
                                    <figure class="card-img-top overlay overlay-1"><a href="${linkDetail}"><img
                                                src="${data[i].thumb}"" alt="" /></a>
                                        <figcaption>
                                            <h5 class="from-top mb-0">Read More</h5>
                                        </figcaption>
                                    </figure>
                                    <div class="card-body">
                                        <div class="post-header">
                                            <div class="post-category">
                                                <a href="#" class="hover link-grape" rel="category">${data[i].title}</a>
                                            </div>
                                            <!-- /.post-category -->
                                            <h2 class="post-title mt-1 mb-0"><a class="link-navy"
                                                    href="${linkDetail}">${data[i].title}</a>
                                            </h2>
                                        </div>
                                        <!-- /.post-header -->
                                        <div class="post-content">
                                            <p>${data[i].description}</p>
                                        </div>
                                        <!-- /.post-content -->
                                    </div>
                                    <!--/.card-body -->
                                    <div class="card-footer">
                                        <ul class="post-meta d-flex mb-0">
                                            <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${data[i].created_at}
                                                    </span></li>
                                            <li class="post-author"><a href="#"><i class="uil uil-user"></i><span>By
                                                        Sandbox</span></a></li>
                                            <li class="post-comments"><a href="#"><i class="uil uil-comment"></i>3<span>
                                                        Comments</span></a></li>
                                            <li class="post-likes ms-auto"><a href="#"><i
                                                        class="uil uil-heart-alt"></i>3</a></li>
                                        </ul>
                                        <!-- /.post-meta -->
                                    </div>
                                    <!-- /.card-footer -->
                                </div>
                                <!-- /.card -->
                            </article>
           `;
      }
      articleLarge.html(content);
    },
  });


  $.ajax({
    type: "GET",
    url: "http://apiforlearning.zendvn.com/api/articles",
    data: {
      offset: 3,
      limit: 4,
    },
    dataType: "json",
    success: function (data) {
      let content = "";
      for (let i = 0; i < data.length; i++) {
        let linkDetail = "detail.html?id=" + data[i].id;
        content += `
            <article class="item post col-md-6">
                                    <div class="card shadow-lg">
                                        <figure class="card-img-top overlay overlay-1"><a href="${linkDetail}"> <img
                                                    src="${data[i].thumb}" alt="" /></a>
                                            <figcaption>
                                                <h5 class="from-top mb-0">Read More</h5>
                                            </figcaption>
                                        </figure>
                                        <div class="card-body">
                                            <div class="post-header">
                                                <div class="post-category">
                                                    <a href="#" class="hover link-yellow" rel="category">Roadtrip</a>
                                                </div>
                                                <!-- /.post-category -->
                                                <h2 class="post-title h3 mt-1 mb-3"><a class="link-navy"
                                                        href="${linkDetail}">${data[i].title}</a></h2>
                                            </div>
                                            <!-- /.post-header -->
                                            <div class="post-content">
                                                <p>${data[i].description}</p>
                                            </div>
                                            <!-- /.post-content -->
                                        </div>
                                        <!--/.card-body -->
                                        <div class="card-footer">
                                            <ul class="post-meta d-flex mb-0">
                                                <li class="post-date"><i class="uil uil-calendar-alt"></i><span>${data[i].created_at}</span></li>
                                                <li class="post-comments"><a href="#"><i
                                                            class="uil uil-comment"></i>4</a></li>
                                                <li class="post-likes ms-auto"><a href="#"><i
                                                            class="uil uil-heart-alt"></i>5</a></li>
                                            </ul>
                                            <!-- /.post-meta -->
                                        </div>
                                        <!-- /.card-footer -->
                                    </div>
                                    <!-- /.card -->
                                </article>
            `;
      }
      articleSmall.html(content);
    },
  });
});
