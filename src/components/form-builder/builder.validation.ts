import Joi from "joi";

const validateFormCreation = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    questions: Joi.array()
      .items(
        Joi.object().keys({
          question: Joi.string().required(),
          type: Joi.string()
            .valid("multipleChoice", "checkbox", "text", "dropdown")
            .required(),
          options: Joi.when("questionType", {
            // is: "multipleChoice",
            // then: Joi.array().items(Joi.string()).min(2).required(),
            // otherwise: Joi.array().items(Joi.string()),
            switch: [
              {
                is: "multipleChoice",
                then: Joi.array().items(Joi.string()).min(2).required(),
              },
              {
                is: "checkbox",
                then: Joi.array().items(Joi.string()).min(2).required(),
              },
              {
                is: "dropdown",
                then: Joi.array().items(Joi.string()).min(1).required(),
              },
              {
                is: "text",
                then: Joi.array().items(Joi.string()),
              },
            ],
          }),
          required: Joi.boolean().required(),
        })
      )
      .min(1)
      .required(),
  }),
};

export default validateFormCreation;
