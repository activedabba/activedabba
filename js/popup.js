window.onload = function() {
    var modal = document.getElementById("myModal");

    var img1 = document.getElementById("image_1");
    var img2 = document.getElementById("image_2");
    var img3 = document.getElementById("image_3");
    var img4 = document.getElementById("image_4");
    var img5 = document.getElementById("image_5");
    var img6 = document.getElementById("image_6");
    var img7 = document.getElementById("image_7");
    var img8 = document.getElementById("image_8");
    var img9 = document.getElementById("image_9");
    var img10 = document.getElementById("image_10");

    var modalImg = document.getElementById("img01");
    var captionText = document.getElementById("caption");
    var span = document.getElementsByClassName("close")[0];

    img1.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    img2.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    img3.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img4.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img5.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img6.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img7.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img8.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img9.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }
    img10.onclick = function() {
        modal.style.display = "block";
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    }

    span.onclick = function() {
        modal.style.display = "none";
    }
}