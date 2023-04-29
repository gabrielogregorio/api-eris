import Joi from 'joi';

type messageSchemaType = {
  question: string;
};

export const messageSchema: Joi.ObjectSchema<messageSchemaType> = Joi.object({
  question: Joi.string().required(),
});
