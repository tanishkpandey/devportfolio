const srt = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400
    })

srt.reveal('.top')
srt.reveal(".bottom", {origin: "bottom"})
srt.reveal(".left", {origin: "left"})
srt.reveal(".right", {origin: "right"})
srt.reveal(".show" , {interval: 100})