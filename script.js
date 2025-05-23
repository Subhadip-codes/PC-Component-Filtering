const components = [
  { name: "HDD", category: "MEMORY", image: "images/HDD.jpg" },
  { name: "SSD", category: "MEMORY", image: "images/SSD1.jpg" },
  { name: "M.2 NVMe", category: "MEMORY", image: "images/M.2 NVMe.png" },
  { name: "RAM", category: "MEMORY", image: "images/RAM.jpg" },
  { name: "INTEL", category: "CPU", image: "images/INTEL.jpg" },
  { name: "AMD", category: "CPU", image: "images/AMDR.jpg" },
  { name: "MICROSOFT WINDOWS", category: "OS", image: "images/WINDOWS.jpg" },
  { name: "LINUX", category: "OS", image: "images/LINUX.JPG" },
  { name: "MAC", category: "OS", image: "images/MAC.jpeg" },
  { name: "MOUSE", category: "INPUT DEVICES", image: "images/Mouse.jpg" },
  { name: "KEYBOARD", category: "INPUT DEVICES", image: "images/keyboard.jpg" },
  { name: "MICROPHONE", category: "INPUT DEVICES", image: "images/microphone.JPG" },
  { name: "MONITOR", category: "OUTPUT DEVICES", image: "images/monitor.JPG" },
  { name: "PRINTERS", category: "OUTPUT DEVICES", image: "images/printer.JPG" },
  { name: "PROJECTORS", category: "OUTPUT DEVICES", image: "images/projectors.JPG" },
  { name: "SPEAKER", category: "OUTPUT DEVICES", image: "images/speaker.JPG" },
  { name: "UPS", category: "OTHERS", image: "images/ups.JPG" },
  { name: "GIGABYTE", category: "MOTHERBOARD", image: "images/gigabyte.JPG" },
  { name: "MSI", category: "MOTHERBOARD", image: "images/msi.JPG" },
  { name: "ASROCK", category: "MOTHERBOARD", image: "images/asrock.JPG" },
  { name: "APPLICATION SOFTWARES", category: "SOFTWARES", image: "images/app.webp" },
  { name: "SYSTEM SOFTWARES", category: "SOFTWARES", image: "images/software system.jpg" },
  { name: "PSU", category: "OTHERS", image: "images/PSU.JPG" },
  { name: "GRAPHICS CARD", category: "OTHERS", image: "images/graphics card.JPG" },
  { name: "FLASH DRIVE", category: "OTHERS", image: "images/flask drive.JPG" },
  { name: "DVD", category: "OTHERS", image: "images/DVD.jpg" },
];

const componentList = document.getElementById("componentList");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const filterButtons = document.querySelectorAll(".filter-buttons button");

function renderComponents(data) {
  componentList.innerHTML = "";
  data.forEach(comp => {
    const div = document.createElement("div");
    div.className = "component";
    div.innerHTML = `
      <img src="${comp.image}" alt="${comp.name}">
      <h3>${comp.name}</h3>
      <a href="#">Know More</a>
    `;
    componentList.appendChild(div);
  });
}

function applyFilter(category) {
  const filtered = category === "ALL" ? components : components.filter(c => c.category === category);
  renderComponents(filtered);
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".filter-buttons .active").classList.remove("active");
    btn.classList.add("active");
    applyFilter(btn.dataset.filter);
  });
});

searchBtn.addEventListener("click", () => {
  const keyword = searchInput.value.toLowerCase();
  const filtered = components.filter(c => c.name.toLowerCase().includes(keyword));
  renderComponents(filtered);
});

// Initial render
renderComponents(components);
