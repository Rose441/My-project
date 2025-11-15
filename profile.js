const gitEl = document.querySelectorAll(".git-el")

const links = [
      "http://github.com/rose441",
      "http://wa.me/+2349110981508",
      "http://www.linkedin.com/in/florence-onwudebelu-123456789",
      "http://www.facebook.com/profile.php?id=100079048759051",
      "http://www.instagram.com/fiora_dev",
      "https://x.com/florence_n37924?t=Ow6MH5VTKOwVoxc2qH9-pQ&s=09"
      
];
  for (let i = 0; i < gitEl.length; i++) {
      gitEl[i].addEventListener ("click", function() {
          window.open(links[i], "_blank" );
    });
  } 



