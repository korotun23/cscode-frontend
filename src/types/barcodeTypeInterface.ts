/**
 * Barcode type
 * Defines a barcode type (e.g EAN-13, Code 128, QR Code...)
 *
 * @property identifier - The identifier of the barcode type (the value which is used in the barcode generator library, e.g 'ean13', 'code128', 'qrcode')
 * @property name - The name of the barcode type (the value which is displayed in the UI, e.g 'EAN-13', 'Code 128', 'QR Code')
 * @property defaultValue - The default value of the barcode type (e.g '123456789012')
 * @property size - The default size of the barcode type (e.g [200, 200])
 * @property options - The options of the barcode type - Options : displayText - text value is displayable under the barcode)
 *
 */
export interface BarcodeTypeInterface {
  identifier: string
  name: string
  defaultValue: string
  size: [number, number]
  options: {
    displayText: boolean
  }
}
