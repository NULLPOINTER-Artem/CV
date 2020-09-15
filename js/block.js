{
    var rotateY = 0,
        rotateX = 0;
        speed = 8;

    document.onmousedown = function (e) {
                if (e.button === 0) {
                    document.querySelector('.blockCube').innerHTML +=
                        "<div class='cube'>"+
                        "<div class='side front'>front</div>"+
                        "<div class='side left'>left</div>"+
                        "<div class='side right'>right</div>"+
                        "<div class='side top'>top</div>"+
                        "<div class='side back'>back</div>"+
                        "<div class='side button'>button</div>"+
                        "</div>";
                }
    }

    document.onkeydown = function (e) {
                if (e.keyCode === 37) rotateY -= speed;
        else if (e.keyCode === 38) rotateX -= speed;
        else if (e.keyCode === 39) rotateY += speed;
        else if (e.keyCode === 40) rotateX += speed;
        else if (e.keyCode === 8) {
            let deletedBlock = document.querySelector('.blockCube')
                    .childNodes[document.querySelector('.blockCube').childNodes.length - 1];

            deletedBlock.remove();
        }

        for (let i = 0; i < document.querySelector('.blockCube').childNodes.length; i++) {
            document.querySelector('.blockCube').childNodes[i].style.transform = 
                'rotateY(' + rotateY + 'deg)'+
                'rotateX(' + rotateX + 'deg)';
        }
    }
};

