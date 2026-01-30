const message = `Hi… I know this is kinda unexpected. I'm confessing my feelings for you using this website I made.\nWe don’t really know each other, so I figured this was the safest way to be honest without making things weird.\n\nI just wanted to leave a small truth lang; I’ve had a quiet crush on you for a while. You probably don’t know me at all, but I’ve noticed you more than you think.\n\nAlso i'm hoping, kahit maliit lang, na may chance ako in some universe. \n\nNo pressure to reply, okay? I just wanted this small but terrible confession to reach you calmly and honestly, without expectations.\n\nMaybe someday I will have the courage to introduce myself to you and face you. For now, just know na may someone out there who genuinely admires you.`;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
