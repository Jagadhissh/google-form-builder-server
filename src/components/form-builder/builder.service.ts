import ApiError from "../../services/ApiError.service";
import GoogleForms from "./builder.model";

interface Question {
  questionText: string;
  questionType: string;
  options?: string[];
}

interface FormBody {
  title: string;
  questions: Question[];
}

class BuilderService {
  constructor() {}

  async all() {
    const response = await GoogleForms.find();
    return response;
  }
  async create(body: FormBody) {
    const googleForms = new GoogleForms(body);
    await googleForms.save();
    return googleForms;
  }
  async update(body: FormBody, id: string) {
    const googleForms = await GoogleForms.findByIdAndUpdate(id, body, {
      new: true,
    });
    if (!googleForms) {
      throw new ApiError(404, "Form not found that you are trying to update");
    }
    return googleForms;
  }
  async view(id: string) {
    const response = await GoogleForms.findById(id);
    if (!response) {
      throw new ApiError(404, "Form not found that you are trying to view");
    }
    return response;
  }
  async delete(id: string) {
    const response = await GoogleForms.findByIdAndDelete(id);
  }
}
export default new BuilderService();
