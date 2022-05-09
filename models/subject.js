const mongoose = require("mongoose");
const { Schema } = mongoose;

//definiciones referir a https://docs.google.com/spreadsheets/d/1QtglsawAElhls7iffxxqIlZT3ENGJYDMkZ3Nj8IrPqA/edit#gid=1063747457

const subjectSchema = new Schema({
  subject: Number,
  sxo_bco: String,
  edad_a: Number,
  edad_m: Number,
  e_gest: Number,
  peso_nac: Number,
  region: String,
  u_r: String,
  m_educ: String,
  n_educ1: String,
  n_educ2: String,
  ocupacion: String,
  i_percap: Number,
  prevision: String,
  edad_dg_a: Number,
  edad_dg_m: Number,
  dg_audio_od: String,
  dg_audio_oi: String,
  perfil_od: String,
  perfil_oi: String,
  had_od: String,
  had_oi: String,
  edad_had_a: Number,
  edad_had_m: Number,
  prog_adod: String,
  prog_adoi: String,
  r_dis: String,
  a_flia_ha: String,
  comorbi_1: String,
  comorbi_2: String,
  alelo: String,
  progresividad: String,
  aa_codon: String,
  haplotipo: String,
  gen_adic: String,
  ref_seq2: String,
  gen: String,
  gen_adic: String,
  mut_prot: String,
  createdAt: { type: Date, default: Date.now() },
  ref_seq: [
    {
      ref_seq: [String],
      pos_chr13: [String],
    },
  ],
});

subjectSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString();
    delete returnedObject._id;
    delete returnedObject.__v;
  },
});

const Subject = mongoose.model("Subject", subjectSchema);

module.exports = Subject;
