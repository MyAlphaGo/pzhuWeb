'use strict';

const Controller = require('egg').Controller;

class ResourceIssue extends Controller {
    async getResourceIssue() {
        const { ctx, app } = this;
        try {
            const token = ctx.header.authorization;
            const author = await ctx.service.jwt.verifyToken(token);
            if (!author) {
                ctx.status = 403;
            } else {
                const { id } = ctx.request.body;
                const table = 'ResourceType';
                const table1 = 'Resource';
                const params = {
                    include: [
                        {
                            model: app.model.ResourceType
                        }
                    ],
                    where: {
                        userid: id,
                        status: 2
                    }
                };
                const resourceType = await ctx.service.mysql.findAll({}, table);
                const resource = await ctx.service.mysql.findAll(params, table1);
                if (resource.length === 0) {
                    ctx.status = 200;
                    ctx.body = {
                        success: 1,
                        data: resourceType
                    };
                } else {
                    ctx.status = 200;
                    ctx.body = {
                        success: 0,
                        data: {
                            resourceType,
                            resource
                        }
                    };
                }

            }
        } catch (err) {
            ctx.status = 404;
            console.log(err);
        }
    }
    async uploadResource() {
        const { ctx } = this;
        try {
            const token = ctx.header.authorization;
            const author = await ctx.service.jwt.verifyToken(token);
            if (!author) {
                ctx.status = 403;
            } else {
                let { id, userid, title, link, description, type, status } = ctx.request.body;
                id = parseInt(id);
                const table = 'Resource';
                const params = {
                    userid,
                    title,
                    link,
                    typeid: parseInt(type),
                    description,
                    status: 1
                };
                if (parseInt(status) === 1) {
                    await ctx.service.mysql.create(params, table);
                } else {
                    const resource = await ctx.service.mysql.findById(id, table);
                    await resource.update(params);
                }
                ctx.status = 200;
                ctx.body = {
                    success: 1,
                };


            }
        } catch (err) {
            console.log(err);
            ctx.status = 404;
        }
    }
    async uploadResourceCover() {
        const { ctx } = this;
        try {
            const token = ctx.header.authorization;
            const author = await ctx.service.jwt.verifyToken(token);
            if (!author) {
                ctx.status = 403;
            } else {
                let { id, userid, key, status } = ctx.request.body;
                id = parseInt(id);
                const posterlink = await ctx.service.qiniu.getCDN(key);
                const table = 'Resource';
                const params = {
                    userid,
                    posterlink,
                    status: 2
                };
                let resource;
                if (parseInt(status) === 1) {
                    resource = await ctx.service.mysql.create(params, table);
                } else {
                    resource = await ctx.service.mysql.findById(id, table);
                    await resource.update(params);
                }
                ctx.status = 200;
                ctx.body = {
                    success: 1,
                    data: resource
                };
            }
        } catch (err) {
            console.log(err);
            ctx.status = 404;
        }
    }
    async delResourceCover() {
        const { ctx } = this;
        try {
            const token = ctx.header.authorization;
            const author = await ctx.service.jwt.verifyToken(token);
            if (!author) {
                ctx.status = 403;
            } else {
                const { id, posterlink } = ctx.request.body;
                const arry = posterlink.split('/');
                const key = arry[arry.length - 1];
                const table = 'Resource';
                const params = {
                    posterlink: ''
                };
                const resource = await ctx.service.mysql.findById(id, table);
                await resource.update(params);
                await ctx.service.qiniu.deleteFile('webimg', key);
                ctx.status = 200;
                ctx.body = {
                    success: 1
                };
            }
        } catch (err) {
            console.log(err);
            ctx.status = 404;
        }
    }
    async uploadResourceAttachment() {
        const { ctx } = this;
        try {
            const token = ctx.header.authorization;
            const author = await ctx.service.jwt.verifyToken(token);
            if (!author) {
                ctx.status = 403;
            } else {
                let { id, userid, key, status } = ctx.request.body;
                id = parseInt(id);
                const attachment = await ctx.service.qiniu.getCDN(key);
                const table = 'Resource';
                const params = {
                    userid,
                    attachment,
                    status: 2
                };
                let resource;
                if (parseInt(status) === 1) {
                    resource = await ctx.service.mysql.create(params, table);
                } else {
                    resource = await ctx.service.mysql.findById(id, table);
                    await resource.update(params);
                }
                ctx.status = 200;
                ctx.body = {
                    success: 1,
                    data: resource
                };
            }
        } catch (err) {
            console.log(err);
            ctx.status = 404;
        }
    }
    async delAttachment() {
        const { ctx } = this;
        try {
            const token = ctx.header.authorization;
            const author = await ctx.service.jwt.verifyToken(token);
            if (!author) {
                ctx.status = 403;
            } else {
                const { id, attachment } = ctx.request.body;
                const arry = attachment.split('/');
                const key = arry[arry.length - 1];
                const table = 'Resource';
                const params = {
                    attachment: ''
                };
                const resource = await ctx.service.mysql.findById(id, table);
                await resource.update(params);
                await ctx.service.qiniu.deleteFile('webimg', key);
                ctx.status = 200;
                ctx.body = {
                    success: 1
                };
            }
        } catch (err) {
            console.log(err);
            ctx.status = 404;
        }
    }

}
module.exports = ResourceIssue;