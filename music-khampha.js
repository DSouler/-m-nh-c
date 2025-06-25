var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("carousel")[0].getElementsByTagName("img");
    
    // Ẩn tất cả các ảnh
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Tăng chỉ số và hiển thị ảnh tiếp theo
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1; // Quay lại ảnh đầu tiên nếu đã hiển thị tất cả ảnh
    }

    slides[slideIndex - 1].style.display = "block"; // Hiển thị ảnh hiện tại

    // Gọi hàm này lại sau mỗi 2 giây
    setTimeout(showSlides, 2500); // Thay đổi ảnh sau 2 giây
}

// Xử lý nút "Left" và "Right"
document.getElementById("prevBtn").addEventListener("click", function() {
    slideIndex--;
    showSlides();
});

document.getElementById("nextBtn").addEventListener("click", function() {
    slideIndex++;
    showSlides();
});

