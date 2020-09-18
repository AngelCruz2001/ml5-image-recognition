import * as ml5 from 'ml5';
export const getModel = async () => {
    const model = await ml5.objectDetector('cocosdd')
    console.log(model)
    return model;
}
