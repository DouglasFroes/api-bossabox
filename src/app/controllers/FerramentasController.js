const Ferramenta = require("../models/Ferramenta");

class AdController {
  async index(req, res) {
    const filters = {};
    if (req.query.tag) {
      filters.tags = new RegExp(req.query.tag, "i");
    }

    const ads = await Ferramenta.paginate(filters, {
      page: req.query.page || 1,
      limit: 20,
      populate: "author",
      sort: "-createdAt"
    });
    return res.json(ads);
  }

  async show(req, res) {
    const ad = await Ferramenta.findById(req.params.id);
    return res.json(ad);
  }

  async store(req, res) {
    const ferramenta = await Ferramenta.create({
      ...req.body
    });
    return res.json(ferramenta);
  }

  async update(req, res) {
    const ferramenta = await Ferramenta.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true
      }
    );
    return res.json(ferramenta);
  }

  async destroy(req, res) {
    await Ferramenta.findByIdAndDelete(req.params.id);
    return res.status(204).send();
  }
}

module.exports = new AdController();
