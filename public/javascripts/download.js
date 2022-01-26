function downloadClick () {
  // 获取base64的图片节点
  var img = document.getElementById('qrcode').getElementsByTagName('img')[0];
  // 构建画布
  var canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  canvas.getContext('2d').drawImage(img, 0, 0);
  // 构造url
  url = canvas.toDataURL('image/png');
  // 构造a标签并模拟点击
  var downloadLink = document.getElementById('downloadLink');
  downloadLink.setAttribute('href', url);
  downloadLink.setAttribute('download', '二维码.png');
  downloadLink.click();
}