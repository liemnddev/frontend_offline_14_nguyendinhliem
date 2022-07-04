$(document).ready(function () {
    let mainMenu = $(".main_menu");
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
            if (i < 5) {
              content += `
                <li class="nav-item">
                    <a class="nav-link" href="${link}">${name}</a>
                </li>
                    `;
            } else {
              contentMenuOther += `
                <li class="nav-item"><a class="dropdown-item" href="${link}">${name}</a></li>
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
    $.ajax({
        type: "GET",
        url: "http://apiforlearning.zendvn.com/api/categories_news/1/articles",
        data: "data",
        dataType: "json",
        success: function (data) {
            let content ="";
            for (let i = 0; i < data.length; i++) {
               content += `
               <article class="post">
               <div class="card">
                   <figure class="card-img-top overlay overlay-1 hover-scale"><a
                           href="./blog-post.html"><img src="./assets/img/photos/b1.jpg" alt="" /></a>
                       <figcaption>
                           <h5 class="from-top mb-0">Read More</h5>
                       </figcaption>
                   </figure>
                   <div class="card-body">
                       <div class="post-header">
                           <div class="post-category text-line">
                               <a href="#" class="hover" rel="category">Teamwork</a>
                           </div>
                           <!-- /.post-category -->
                           <h2 class="post-title mt-1 mb-0"><a class="link-dark"
                                   href="./blog-post.html">Amet Dolor Bibendum Parturient Cursus</a>
                           </h2>
                       </div>
                       <!-- /.post-header -->
                       <div class="post-content">
                           <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget
                               lacinia odio sem nec elit. Nullam quis risus eget urna mollis ornare
                               vel. Nulla vitae elit libero, a pharetra augue. Praesent commodo cursus
                               magna, vel scelerisque nisl consectetur et. Sed posuere consectetur est
                               at lobortis. Cras mattis consectetur purus sit amet fermentum. Fusce
                               dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh. Cras
                               mattis consectetur purus.</p>
                       </div>
                       <!-- /.post-content -->
                   </div>
                   <!--/.card-body -->
                   <div class="card-footer">
                       <ul class="post-meta d-flex mb-0">
                           <li class="post-date"><i class="uil uil-calendar-alt"></i><span>5 Jul
                                   2022</span></li>
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
            
        }
    });
})