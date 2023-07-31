interface RootObject {
    isSuccess: boolean;
    errorMessage?: any;
    content: Content[];
  }
  
  interface Content {
    id: number;
    companyId: string;
    userId: string;
    address: string;
    area: string;
    rent: number;
    type: string;
    spaceNo: string;
    contractDate: string;
    availableDate: string;
    addedDate: string;
    status: string;
  }
  
  