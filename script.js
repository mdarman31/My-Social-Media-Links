alert("Welcome To My Profile")
// script.js
const socialLinks = [
    { name: "Facebook", url: "https://www.facebook.com/skr.arman.1?mibextid=rS40aB7S9Ucbxw6v" },
    { name: "Twitter", url: "https://x.com/arman_skr58709?t=l4cPWM56IGYyM2IScK9T7A&s=09" },
    { name: "Instagram", url: "https://www.instagram.com/armankhan_31/?hl=en" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/md-arman-b4163728a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" },
    { name: "GitHub", url: "https://github.com/mdarman31" },
    { name: "YouTube", url: "https://www.youtube.com/@ArmanGECV" }
];

const socialLinksList = document.getElementById("social-links");

socialLinks.forEach(link => {
    const listItem = document.createElement("li");
    const anchor = document.createElement("a");
    anchor.href = link.url;
    anchor.textContent = link.name;
    listItem.appendChild(anchor);
    socialLinksList.appendChild(listItem);
});