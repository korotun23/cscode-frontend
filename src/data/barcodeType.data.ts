import type { BarcodeTypeInterface } from '../types/barcodeTypeInterface'

export const barcodeTypesData: BarcodeTypeInterface[] = [
  {
    identifier: 'ean13',
    name: 'EAN-13',
    defaultValue: '123456789012',
    size: [70, 30],
    options: {
      displayText: true,
    }
  },
  {
    identifier: 'code128',
    name: 'Code 128',
    defaultValue: '123456789012',
    size: [70, 30],
    options: {
      displayText: true,
    }
  },
  {
    identifier: 'qrcode',
    name: 'QR Code',
    defaultValue: '123456789012',
    size: [50, 50],
    options: {
      displayText: false,
    }
  },
  {
    identifier: 'datamatrix',
    name: 'Data Matrix',
    defaultValue: '123456789012',
    size: [50, 50],
    options: {
      displayText: false,
    }
  },
]
