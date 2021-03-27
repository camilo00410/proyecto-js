$(document).ready(function(){

    // Slider
    $('.galeria').bxSlider({
        auto: true,
        autoControls: true,
        stopAutoOnClick: true,
        pager: true,
        slideWidth: 1200
      });

    // Posts
    var posts = [
    {
        title: 'Prueba de titulo 1',
        date: 'Publicado el dia '+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officia similique itaque reiciendis esse vel iste voluptate facere nemo beatae vitae omnis quia quo placeat ipsa suscipit. Necessitatibus, tenetur sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente molestias qui ut quibusdam vitae quas excepturi harum reprehenderit architecto tempore illo voluptatum, repellat, officiis autem explicabo sed? Incidunt, quod'        
    },
    {
        title: 'Prueba de titulo 2',
        date: 'Publicado el dia '+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),        
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officia similique itaque reiciendis esse vel iste voluptate facere nemo beatae vitae omnis quia quo placeat ipsa suscipit. Necessitatibus, tenetur sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente molestias qui ut quibusdam vitae quas excepturi harum reprehenderit architecto tempore illo voluptatum, repellat, officiis autem explicabo sed? Incidunt, quod'        
    },
    {
        title: 'Prueba de titulo 3',
        date: 'Publicado el dia '+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),        
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officia similique itaque reiciendis esse vel iste voluptate facere nemo beatae vitae omnis quia quo placeat ipsa suscipit. Necessitatibus, tenetur sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente molestias qui ut quibusdam vitae quas excepturi harum reprehenderit architecto tempore illo voluptatum, repellat, officiis autem explicabo sed? Incidunt, quod'        
    },
    {
        title: 'Prueba de titulo 4',
        date: 'Publicado el dia '+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),        
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officia similique itaque reiciendis esse vel iste voluptate facere nemo beatae vitae omnis quia quo placeat ipsa suscipit. Necessitatibus, tenetur sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente molestias qui ut quibusdam vitae quas excepturi harum reprehenderit architecto tempore illo voluptatum, repellat, officiis autem explicabo sed? Incidunt, quod'        
    },
    {
        title: 'Prueba de titulo 5',
        // date: new Date(),
        date: 'Publicado el dia '+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officia similique itaque reiciendis esse vel iste voluptate facere nemo beatae vitae omnis quia quo placeat ipsa suscipit. Necessitatibus, tenetur sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente molestias qui ut quibusdam vitae quas excepturi harum reprehenderit architecto tempore illo voluptatum, repellat, officiis autem explicabo sed? Incidunt, quod'        
    },
    {
        title: 'Prueba de titulo 6',
        // date: new Date(),
        date: 'Publicado el dia '+moment().date()+" de "+moment().format("MMMM")+" del "+moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officia similique itaque reiciendis esse vel iste voluptate facere nemo beatae vitae omnis quia quo placeat ipsa suscipit. Necessitatibus, tenetur sequi! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni sapiente molestias qui ut quibusdam vitae quas excepturi harum reprehenderit architecto tempore illo voluptatum, repellat, officiis autem explicabo sed? Incidunt, quod'        
    },
    ];
   posts.forEach((item, index) => {
        var post = `
        <article class="post">
        <h2>${item.title}</h2>
        <span class="date">${item.date}</span>
        <p>${item.content}</p>
        <a href="#" class="button-more">Leer mas</a>
        </article>
        `

        $("#posts").append(post);
   });


    //    SELECTOR DE TEMA
    var theme= $("#theme")
    $("#to-green").click(function(){
        theme.attr("href", "css/green.css");
    });
    $("#to-red").click(function(){
        theme.attr("href", "css/red.css");
    });
    $("#to-blue").click(function(){
        theme.attr("href", "css/blue.css");
    });


    // Scroll arriba de la web
    $('.subir').click(function(e){
        e.preventDefault();

        $('html, body').animate({
            scrollTop: 0
        }, 1000);

        return false;
    })
});