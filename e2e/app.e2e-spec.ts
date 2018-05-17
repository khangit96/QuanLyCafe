
import { DemoAngularPage } from './app.po';
import { browser, element, by } from 'protractor';

describe('demo-angular App', function() {
  let page: DemoAngularPage;

  beforeEach(() => {
    page = new DemoAngularPage();
  });

  it('Kiểm tra chức đăng nhập', () => {

      browser.get('dang-nhap');

      const dangnhap = element(by.css('#bt-dangnhap'));

      const edDangNhap = element(by.css('#tenDangNhap')).sendKeys('khangnhd');
      const edMatKhau = element(by.css('#matKhau')).sendKeys('');
      dangnhap.click();
      browser.sleep(6000);
      const error = element(by.css('#error')).getText();
      expect(error).toEqual('Mật khẩu không được rỗng');++++
    });






    // it('Thêm bàn nhập tên bàn và nhập số bàn hợp lệ', () => {
    //     browser.get('/them-ban');

    //     const btThemBan = element(by.css('#bt'));
    //     btThemBan.click();
    //     browser.sleep(3000);

    //     const edTenBan = element(by.css('#tenBan')).sendKeys('Bàn 2');
    //     const edSoBan = element(by.css('#soBan')).sendKeys('2');

    //     const btThem = element(by.css('#them'));
    //     btThem.click();

    //     browser.sleep(6000);

    //     const error = element(by.css('#error')).getText();
    //     expect(error).toEqual('Thêm bàn thành công');
    // });
});
