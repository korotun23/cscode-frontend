import type { BarcodeTypeInterface } from '../types/barcodeTypeInterface'
import { barcodeTypesData } from '../data/barcodeType.data'

export class BarcodeTypeService {
  private static instance: BarcodeTypeService

  private constructor() {}

  public static getInstance(): BarcodeTypeService {
    if (!BarcodeTypeService.instance) {
      BarcodeTypeService.instance = new BarcodeTypeService()
    }
    return BarcodeTypeService.instance
  }

  /**
   * Load the barcode types from the data file
   */
  private barcodeTypes: BarcodeTypeInterface[] = barcodeTypesData

  /**
   * Get the barcode types array
   * @returns The barcode types array
   */
  public getBarcodeTypes(): BarcodeTypeInterface[] {
    return this.barcodeTypes
  }
}
