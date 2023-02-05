export interface DecodeVin {
  Value: string;
  ValueId: string;
  Variable: string;
  VariableId: number;
}

export interface DecodeVinAnswear {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: DecodeVin[];
}
