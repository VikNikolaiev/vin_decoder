export interface VehicleVariable {
  ID: number;
  Name: string;
  GroupName:string;
  Description: string;
}

export interface VehicleVariableAnswear {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: VehicleVariable[];
}
