let btn = document.querySelector(".btn");
let indicator = document.querySelector(".indicator");
let btnContainer = document.querySelector(".btn-container");

btn.addEventListener("click", () => {


if (btn.style.float === "right") {
    btn.style.float = "left";
    btnContainer.style.backgroundColor = "grey";
    indicator.style.backgroundColor = "white";
    indicator.style.boxShadow = "none";
    btn.style.transition = "all 8s";
} else {
    btn.style.float = "right";
    btnContainer.style.backgroundColor = "white";//"#40a9f3";
    indicator.style.backgroundColor = "black";//"#40a9f3";
    indicator.style.boxShadow = "0 0 1rem white";//#40a9f3";
    btn.style.transition = "all 8s";
}

let root = document.getElementById("root");      
  if(getComputedStyle(root).getPropertyValue('--primary-color') === '#fff'){
    setTheme('#000000c2', '#f7f5f545', '#f7f5f5f5', '#ccc', '#f0f0f0e6', '255,255,255', '#fff','#f0f0f00f');
  }
  else{
    setTheme('#fff', '#777','#969696', '#000', '#000', '0,0,0', '#000', '#f0f0f0cc');
  }

});

let setTheme = (primary_color, secondary_color, link_color, link_hover_color,
  table_header_border, theme_color, font_color, code_color) => {
    root.style.setProperty('--primary-color', primary_color);
    root.style.setProperty('--secondary-color', secondary_color);
    root.style.setProperty('--link-color', link_color);
    root.style.setProperty('--link-hover-color', link_hover_color);
    root.style.setProperty('--table-header-border', table_header_border);
    root.style.setProperty('--theme-color', theme_color);
    root.style.setProperty('--font-color', font_color);
    root.style.setProperty('--code-color', code_color);
}