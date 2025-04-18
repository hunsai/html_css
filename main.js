$(window).scroll(function () {
  if ($(this).scrollTop() >= 300) {
    $("#backtop").fadeIn();
  } else {
    $("#backtop").fadeOut();
  }
});
// active
$(document).ready(function () {
  $(".menu-tab button").click(function () {
    $(".menu-tab button").removeClass("active"); // Xóa class active khỏi tất cả các button
    $(this).addClass("active"); // Thêm class active vào button được nhấn
  });
});

// chọn ảnh
$(document).ready(function () {
  // Khi nhấp vào một ảnh thu nhỏ
  $(".thumbnail").click(function () {
    // Lấy đường dẫn của ảnh thu nhỏ đã nhấp
    var newSrc = $(this).attr("src");
    // Thay đổi nguồn (src) của ảnh chính
    $("#mainImg").attr("src", newSrc);
  });
});

// nút bấm
$(function () {
  var $thumbnails = $(".thumbnail"),
    $mainImg = $("#mainImg"),
    images = $thumbnails
      .map(function () {
        return $(this).attr("src");
      })
      .get(),
    currentIndex = 0;

  // Cập nhật ảnh chính
  function updateMainImage() {
    $mainImg.fadeOut(200, function () {
      $(this).attr("src", images[currentIndex]).fadeIn(200);
    });
  }

  // Xử lý khi click vào thumbnail
  $thumbnails.on("click", function () {
    currentIndex = $thumbnails.index(this);
    updateMainImage();
  });

  // Nút Previous và Next
  $("#prevBtn, #nextBtn").on("click", function () {
    currentIndex = $(this).is("#prevBtn")
      ? (currentIndex - 1 + images.length) % images.length
      : (currentIndex + 1) % images.length;
    updateMainImage();
  });
});
