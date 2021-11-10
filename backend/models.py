from app import db
import datetime

class Star(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(64), index=True)
    desc = db.Column(db.String(140))
    color = db.Column(db.String(64), index=True)
    subj = db.Column(db.String(64), index=True)
    timestamp = db.Column(db.DateTime(), default=datetime.datetime.utcnow)

    def __repr__(self):
        return 'Title: {}, Desc: {}'.format(self.title, self.desc)
