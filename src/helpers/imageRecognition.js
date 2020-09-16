import * as ml5 from 'ml5';
export const imageRecognition = async (image) => {
    const classifier = await ml5.imageClassifier('MobileNet')
    const resp = await classifier.classify(image)
    return resp;
}