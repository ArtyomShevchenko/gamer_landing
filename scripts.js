document.addEventListener("DOMContentLoaded",() => {

    // Featured slides
    document.addEventListener("click", function() {
        if (event.target === document.querySelector("#link_gal_1")) {
            for(item of document.querySelectorAll(".gallary")) {
                item.classList.remove("gallary_visible");
            };
            for(item of document.querySelectorAll(".link_gal")) {
                item.classList.remove("underline")
            }
            document.querySelector("#gal_1").classList.add("gallary_visible");
            document.querySelector("#link_gal_1").classList.add("underline");
        }
        if (event.target === document.querySelector("#link_gal_2")) {
            for(item of document.querySelectorAll(".gallary")) {
                item.classList.remove("gallary_visible")
            };
            for(item of document.querySelectorAll(".link_gal")) {
                item.classList.remove("underline")
            }
            document.querySelector("#gal_2").classList.add("gallary_visible");
            document.querySelector("#link_gal_2").classList.add("underline");
        }
        if (event.target === document.querySelector("#link_gal_3")) {
            for(item of document.querySelectorAll(".gallary")) {
                item.classList.remove("gallary_visible")
            };
            for(item of document.querySelectorAll(".link_gal")) {
                item.classList.remove("underline")
            }
            document.querySelector("#gal_3").classList.add("gallary_visible");
            document.querySelector("#link_gal_3").classList.add("underline");
        }
        if (event.target === document.querySelector("#link_gal_4")) {
            for(item of document.querySelectorAll(".gallary")) {
                item.classList.remove("gallary_visible")
            };
            for(item of document.querySelectorAll(".link_gal")) {
                item.classList.remove("underline")
            }
            document.querySelector("#gal_4").classList.add("gallary_visible");
            document.querySelector("#link_gal_4").classList.add("underline");
        }
    });

    // Contact form
    const resultForm = document.querySelector("#allDatabaseFromForm");
    
    document.querySelector("#formContact").onsubmit = function() {
        
        const ul = document.createElement("ul");
        const form = [ this[0].value, this[1].value, this[2].value, this[3].value ];
        
        for (item of form) {
            
            const li = document.createElement("li");
            
            li.append(item);
            ul.append(li)
            resultForm.append(ul);
        }

        return false;
        
    }

})