const asyncHandler = (handlerRequest) => {
  return async (req, res, next) => {
    try {
      await Promise.resolve(handlerRequest(req, res, next));
    } catch (error) {
      next(error);
    }
  };
};

export default asyncHandler;
