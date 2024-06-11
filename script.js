// Tab İşlevselliği
function openPage(pageName, element, color) {
  // Tüm tab içeriklerini gizle
  const tabContents = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabContents.length; i++) {
      tabContents[i].style.display = "none";
  }

  // Tüm tab butonlarının arka plan rengini sıfırla
  const tabLinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tabLinks.length; i++) {
      tabLinks[i].style.backgroundColor = "";
  }

  // Seçilen tab içeriğini göster
  document.getElementById(pageName).style.display = "block";

  // Seçilen tab butonunun arka plan rengini ayarla
  element.style.backgroundColor = color;
}

// Sayfa yüklendiğinde varsayılan olarak "Neden Biz?" tabını aç
window.onload = function() {
  document.getElementById("defaultOpen").click();
};

  
  


// İleride eklenebilecek diğer JavaScript fonksiyonları (örneğin form doğrulama, animasyonlar vb.)