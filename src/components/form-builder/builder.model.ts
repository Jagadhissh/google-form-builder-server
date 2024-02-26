import { Schema, model, Document } from "mongoose";

interface IQuestion extends Document {
  question: string;
  type: "string" | "checkbox" | "text" | "dropdown";
  options: string[];
  required: boolean;
}

interface IGoogleForms extends Document {
  title: string;
  description: string;
  questions: IQuestion[];
}
const questionSchema = new Schema<IQuestion>({
  question: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
    enum: ["multipleChoice", "checkbox", "text", "dropdown"],
  },
  required: {
    type: Boolean,
    required: true,
  },
  options: {
    type: [String],
  },
});
const googleForms = new Schema<IGoogleForms>({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },

  questions: [questionSchema],
});

const GoogleForms = model("GoogleForms", googleForms);
export const Question = model("Question", questionSchema);
export default GoogleForms;
