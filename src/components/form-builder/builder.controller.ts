import { Request, Response } from "express";
import builderService from "./builder.service";
import catchAsync from "../../utils/catchAsync";

class BuilderController {
  all = catchAsync(async (req: Request, res: Response) => {
    const response = await builderService.all();
    res.status(201).json({ success: true, response });
  });

  create = catchAsync(async (req: Request, res: Response) => {
    const { body } = req;
    const response = await builderService.create(body);
    res.status(201).json({ success: true, response });
  });
  update = catchAsync(async (req: Request, res: Response) => {
    const { body } = req;
    const response = await builderService.update(body, req.params.id);
    res.status(201).json({ success: true, response });
    res.json("update form");
  });
  delete = catchAsync(async (req: Request, res: Response) => {
    const response = await builderService.delete(req.params.id);
    res
      .status(201)
      .json({ success: true, response: {}, message: "Form deleted" });
  });
  view = catchAsync(async (req: Request, res: Response) => {
    const response = await builderService.view(req.params.id);
    res.status(201).json({ success: true, response });
  });
}
export default new BuilderController();
