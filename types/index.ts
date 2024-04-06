export interface CardProps {
  imgUrl: string;
  special: boolean;
  Ctitle1: string;
  CtitleColor1: string;
  Cvalue1: string;
  Csuperscript1: string;
  Ctitle2: string;
  CtitleColor2: string;
  Cvalue2: string;
  Csuperscript2: string;
  Ctitle3?: string;
  CtitleColor3?: string;
  Cvalue3?: string;
  Csuperscript3?: string;
}

export interface CardTextProps {
  title: string;
  titleColor: string;
  value: string;
  superscript: string;
}

export interface RecentOrderProps {
  imgUrl: string;
  name: string;
  price: string;
  date: string;
  status: boolean;
}