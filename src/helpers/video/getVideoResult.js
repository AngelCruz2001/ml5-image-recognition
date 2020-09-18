export const getVideoResult = async (model, video) => {
    const detector = await model.detect(video)
    return detector
}
