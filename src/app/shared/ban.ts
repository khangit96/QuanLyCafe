export class Ban {
  public tinhTrang:boolean;
  public stt?:number;
  public tongSoTien?:number;
  public tenBan: string;
  public soBan: number;
  public key: string;
  public tongHoaDon?:number;
  constructor(tenBan: string, soBan: number) {
    this.tenBan = tenBan;
    this.soBan = soBan;
    this.tongSoTien=0;
    this.tinhTrang=true;
  }
}
