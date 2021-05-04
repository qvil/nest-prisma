import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient({});

export function softDelete() {
  prisma.$use(async (params, next) => {
    let { model, action, args } = params;

    if (model == 'Post') {
      if (action == 'findUnique') {
        action = 'findFirst';
        args.where['deleted'] = false;
      }
      if (action == 'findMany') {
        if (args.where != undefined) {
          if (args.where.deleted != undefined) {
            args.where['deleted'] = false;
          }
        } else {
          args['where'] = { deleted: false };
        }
      }
      // action = 'update';
      // args['data'] = { deleted: true };
    }
  });

  prisma.$use(async (params, next) => {
    let { model, action, args } = params;

    if (model == 'Post') {
      if (action == 'update') {
        action = 'updateMany';
        args.where['deleted'] = false;
      }
      if (action == 'updateMany') {
        if (args.where != undefined) {
          args.where['deleted'] = false;
        } else {
          args['where'] = { deleted: false };
        }
      }
    }
    return next(params);
  });

  prisma.$use(async (params, next) => {
    let { model, action, args } = params;

    if (model == 'Post') {
      if (action == 'delete') {
        console.log('##########');

        action = 'update';
        args['data'] = { deleted: true };
      }
      if (action == 'deleteMany') {
        action = 'updateMany';
        if (args.data != undefined) {
          args.data['deleted'] = true;
        } else {
          args['data'] = { deleted: true };
        }
      }
    }
    return next(params);
  });
}
