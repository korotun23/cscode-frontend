//import { BarcodeParameters } from '@/types/barcodeParameters'
import { BarcodeParameters } from '../types/barcodeParameters'
import bwipjs from '@bwip-js/node'

export class BarcodeGeneratorService {
  private static instance: BarcodeGeneratorService

  private constructor() {}

  public static getInstance(): BarcodeGeneratorService {
    if (!BarcodeGeneratorService.instance) {
      BarcodeGeneratorService.instance = new BarcodeGeneratorService()
    }
    return BarcodeGeneratorService.instance
  }

  public generateBarcode(barcodeParameters: BarcodeParameters): string{
    try {
      const svgBarcode: string = bwipjs.toSVG({
        bcid: barcodeParameters.identifier,
        text: barcodeParameters.defaultValue,
        height: barcodeParameters.size[1],
        width: barcodeParameters.size[0],
        includetext: barcodeParameters.printTextValue,
      })
      return svgBarcode
    } catch (error) {
      console.error(error)
      return ''
    }
  }
}
