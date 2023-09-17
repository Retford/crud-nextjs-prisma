import { prisma } from '@/libs/prisma';
import { NextResponse } from 'next/server';

export async function GET(req, { params }) {
  const taskId = await prisma.task.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(taskId);
}

export async function PUT(req, { params }) {
  const data = await req.json();
  const taskUpdate = await prisma.task.update({
    where: {
      id: Number(params.id),
    },
    data: data,
  });

  return NextResponse.json(taskUpdate);
}

export async function DELETE(req, { params }) {
  try {
    const deleteId = await prisma.task.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(deleteId);
  } catch (error) {
    return NextResponse.json(error.message);
  }
}
