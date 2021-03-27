$(document).ready(function(){

    // Slider
    if(window.location.href.indexOf('index') > -1){
        $('.galeria').bxSlider({
            auto: true,
            autoControls: true,
            stopAutoOnClick: true,
            pager: true,
            slideWidth: 1200
          });
    }
    

    // Posts

    if(window.location.href.indexOf('index') > -1){
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
}

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
    });


    // Login falso
    $("#login form").submit(function(){
        var form_name = $("#form_name").val();

        localStorage.setItem("form_name", form_name);
    });

    var form_name = localStorage.getItem("form_name");

    if(form_name != null && form_name != undefined){
        var about_parrafo = $("#about p");

        $("#about p").html("<strong>Bienvenido, "+form_name+"</strong>");
        about_parrafo.append("<a href='#' id='logout'>Cerrar sesion</a>");
        $("#login").hide();

        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        })
    }

    if(window.location.href.indexOf('about') > -1){
        $("#acordeon").accordion();
    }
});