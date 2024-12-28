function shuffle(array) {
    // شافِل کردن آرایه با استفاده از الگوریتم فیشر-ییتس
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));  // انتخاب یک ایندکس تصادفی
        [array[i], array[j]] = [array[j], array[i]];    // جابجا کردن دو عنصر
    }

    // برگرداندن ده عنصر اول آرایه شافِل شده
    return array;
}


export default shuffle