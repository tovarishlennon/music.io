// main function - ScrollReveal and properties 
window.sr = ScrollReveal({
    // reset is set to "false" to disable reveal of elements every time 
    reset: false
    // all the html elements below 
});
// --------------------Div of artist boxes--------------------- 
// reveal animation from bottom with the distance of 50px, opacity -0; with smaller scale of 0.7 to full -1 
// duration 2500 milliseconds
sr.reveal('.artist-one', {
    duration: 2500,
    scale: 0.7,
    opacity: 0,
    origin: 'bottom',
    distance: '50px'
});
sr.reveal('.artist-two', {
    duration: 2500,
    scale: 0.7,
    opacity: 0,
    origin: 'bottom',
    distance: '50px'
});
sr.reveal('.artist-three', {
    duration: 2500,
    scale: 0.7,
    opacity: 0,
    origin: 'bottom',
    distance: '50px'
});
sr.reveal('.artist-four', {
    duration: 2500,
    scale: 0.7,
    opacity: 0,
    origin: 'bottom',
    distance: '50px'
});
// ----------------------------------------------------

// Reveal animation of h1 headline in the home page
// duration 1500 milliseconds
sr.reveal('.home-two h1', {
    duration: 1500,
    scale: 0.7,
    opacity: 0,
    origin: 'top',
    distance: '100px'
});
sr.reveal('.home-three h1', {
    duration: 1500,
    scale: 0.7,
    opacity: 0,
    origin: 'top',
    distance: '100px'
});
// ------------------------------------
// ------------------------- Reveal animation of artist image, bio text, iframe and blockquote----------------
sr.reveal('.image', {
    duration: 2500,
    scale: 0.7,
    opacity: 0,
    origin: 'left',
    distance: '50px'
});
sr.reveal('.bio', {
    duration: 2500,
    scale: 0.7,
    opacity: 0,
    origin: 'right',
    distance: '50px'
});
sr.reveal('iframe', {
    duration: 1500,
    scale: 0.7,
    opacity: 0.8
});
sr.reveal('blockquote', {
    duration: 2000,
    scale: 0.7,
    opacity: 0.8
});
// ----------------------------------------------