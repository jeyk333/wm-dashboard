export interface TimeFilterType {
  value: string;
  label: string;
}

export const TIME_FILTER: TimeFilterType[] = [
  { value: '7', label: '7 days' },
  { value: '15', label: '15 days' },
  { value: '30', label: '30 days' },
];
